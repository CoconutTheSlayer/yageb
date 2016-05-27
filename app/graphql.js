import {
  GraphQLObjectType,
  GraphQLString,
  GraphQLInt,
  GraphQLSchema,
  GraphQLList,
  GraphQLNonNull
} from 'graphql';

import CatModel from './models/cat.js';

const Cat = new GraphQLObjectType({
  name: 'Cat',
  description: 'A cat, what else',
  fields () {
    return {
      title: {
        type: GraphQLString,
        resolve (cat) {
          return cat.name;
        }
      },
    };
  }
});

const Query = new GraphQLObjectType({
  name: 'Query',
  description: 'Root query object',
  fields: () => {
    return {
      cats: {
        type: new GraphQLList(Cat),
        resolve (root, args) {
          return CatModel.find({}).exec();
        }
      }
    };
  }
});

const Schema = new GraphQLSchema({
  query: Query
});

export default Schema;
