export default function quotesReducer(state = [], action) {
  let idx;
  let quote;
  switch (action.type) {
    case 'ADD_QUOTE':
      quote = action.quote;
      quote.votes = 0;
      return [...state, quote];
    case 'REMOVE_QUOTE':
      return state.filter(quote => quote.id !== action.quoteId)
    case 'UPVOTE_QUOTE':
      idx = state.findIndex(quoteToFind => quoteToFind .id === action.quoteId);
      quote = state[idx];

      return [
        ...state.slice(0, idx),
        Object.assign({}, quote, {votes: quote.votes += 1}),
        ...state.slice(idx + 1)
      ];
    case 'DOWNVOTE_QUOTE':

      idx = state.findIndex(quoteToFind => quoteToFind .id === action.quoteId);
      quote = state[idx];
      if (quote.votes !== 0) {
        return [
          ...state.slice(0, idx),
          Object.assign({}, quote, {votes: quote.votes -= 1}),
          ...state.slice(idx + 1)
        ];
      } else {
        return state;
      }
    default:
      return state;
  }
}
