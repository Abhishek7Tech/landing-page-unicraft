export const scrollToSection = (ref) => {
    window.scrollTo({
        top:ref.current.offsetTop,
        behavior:"smooth",
    })
}

