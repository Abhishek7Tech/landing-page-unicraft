import { createContext, useRef } from "react";

export const ScrollContext = createContext({
    howItWorks: null,
    pricing: null,
    faq: null,
    contactUs: null

});

const ScrollerProvider = ({children}) => {
    const howItWorks = useRef(null);
    const pricing = useRef(null);
    const faq = useRef(null);
    const contactUs = useRef(null);
    const value = {howItWorks, pricing, faq, contactUs};

    return (<ScrollContext.Provider value={value}>{children}</ScrollContext.Provider>)
}

export default ScrollerProvider;