import { Cat } from "./models/Cat";

export const resolvers = {
    Query: {
        hello: () => "hi",
        cats: async () => {
            return await Cat.find()
        }
    },
    Mutation: {
        createCat: async (_, { name }) => {
            const kitty = new Cat({ name });
            await kitty.save();
            console.log(kitty);
            return kitty;
        } 
    }
};

