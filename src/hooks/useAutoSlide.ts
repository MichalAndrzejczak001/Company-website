import { useState, useEffect } from "react";

export function useAutoSlide(count: number, interval = 5000) {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentIndex(prev => (prev + 1) % count);
        }, interval);
        return () => clearInterval(timer);
    }, [count, interval]);

    return [currentIndex, setCurrentIndex] as const;
}
