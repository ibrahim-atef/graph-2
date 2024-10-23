const resolvers = {
  Query: {
    getItem: async (_, { id }, { dataSources }) => {
      return dataSources.myAPI.getItem(id);
    },
  },
};