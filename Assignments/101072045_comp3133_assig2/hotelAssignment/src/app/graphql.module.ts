import { NgModule } from '@angular/core';
import { APOLLO_OPTIONS } from 'apollo-angular';
import { ApolloClientOptions, InMemoryCache } from '@apollo/client/core';
import { offsetLimitPagination } from '@apollo/client/utilities';
import { HttpLink } from 'apollo-angular/http';
import { onError } from '@apollo/client/link/error';

const uri = 'http://localhost:9000/graphql'; // <-- add the URL of the GraphQL server here

const err = onError(({ graphQLErrors, networkError }) => {
  if (graphQLErrors) {
    graphQLErrors.map(({ message, locations, path }) => {
      console.log(
        `[GraphQL error]: Message ${message}, Location: ${locations}, Path: ${path}`
      );
    });
  }
  if (networkError) {
    console.log(`[Network error]: ${networkError}`);
  }
});

export function createApollo(httpLink: HttpLink): ApolloClientOptions<any> {
  const link = httpLink.create({ uri });
  return {
    link: err.concat(link),
    cache: new InMemoryCache({
      typePolicies: {
        Query: {
          fields: {
            feed: offsetLimitPagination(),
          },
        },
      },
    }),
  };
}

@NgModule({
  providers: [
    {
      provide: APOLLO_OPTIONS,
      useFactory: createApollo,
      deps: [HttpLink],
    },
  ],
})
export class GraphQLModule {}
