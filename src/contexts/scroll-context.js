import { createContext, useRef } from "react";

export const ScrollContext = createContext({
    howItWorks: null,
    pricing: null,
    faq: null
});

const ScrollerProvider = ({children}) => {
    const howItWorks = useRef(null);
    const pricing = useRef(null);
    const faq = useRef(null);

    const value = {howItWorks, pricing, faq};

    return (<ScrollContext.Provider value={value}>{children}</ScrollContext.Provider>)
}

export default ScrollerProvider;