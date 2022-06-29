// Action Creators
// TODO: Create action creators as defined in tests

// Reducer

export const addQuote = (quote => {
  return{
    type: "quotes/add",
    payload: quote,
  }
})

export const removeQuote = (id => {
  return{
    type: "quotes/remove",
    payload: id,
  }
})

export const upvoteQuote = (quoteId => {
  return{
    type: "quotes/upvote",
    payload: quoteId
  }
})

export const downvoteQuote = (quoteId => {
  return{
    type: "quotes/downvote",
    payload: quoteId
  }
})

const initialState = [];

export default function quotesReducer(state = initialState, action) {
  switch(action.type){
    case "quotes/add":
      
      return [...state, action.payload];
      
    case "quotes/remove":
      return state.filter((quote) => quote.id !== action.payload);

    case "quotes/upvote":
      const quote = state.find((quote)=>quote.id === action.payload);
      const quotes = state.filter((quote) => quote.id !== action.payload)
      const updatedQuote = {...quote, votes: quote.votes += 1}
      return [...quotes, updatedQuote];
    
    case "quotes/downvote":
      const quote1 = state.find((quote)=>quote.id === action.payload);
      const quotes1 = state.filter((quote) => quote.id !== action.payload)
      if(quote1.votes!==0){
      const updatedQuote1 = {...quote1, votes: quote1.votes -= 1}
      return [...quotes1, updatedQuote1];}       
  default:
    return state;
  }
}
