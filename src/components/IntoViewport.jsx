function IntoViewport(options) {
    const [observer, setObserver] = useState(null);
    const [isIntersecting, setIsIntersecting] = useState(false);

    function intoViewport(entries, observer) {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                setIsIntersecting(entry.isIntersecting);
                entry.target.children[0].setAttribute(
                    "src",
                    entry.target.children[0].dataset.src
                );
                entry.target.classList.add("fadeIn");
                observer.unobserve(entry.target);
            }
        });
    }

    useEffect(() => {
        const observer = new IntersectionObserver(intoViewport, options);
        setObserver(observer);
        return () => {
            observer.disconnect();
        };
    }, []);
}
export default IntoViewport;
