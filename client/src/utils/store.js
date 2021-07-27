// import React, { createStore, useContext } from 'react';
// import { useProductReducer } from './reducers';

// const AccountContext = createStore();
// const { Provider } = AccountContext;

// const accountProvider = ({ value = [], ...props }) => {
//     const [state, dispatch] = useProductReducer({
//         isLoggedIn: false,
//         userName: 'admin',
//     });

//     return <Provider value={[state, dispatch]} {...props} />;
// };

// const useAccountContext = () => useContext(AccountContext);

// export { accountProvider, useAccountContext };

import { createStore } from "redux";

import reducers from "./reducers";

export default createStore(reducers);