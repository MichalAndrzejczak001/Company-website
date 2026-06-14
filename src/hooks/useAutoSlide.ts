import { useState, useEffect, useCallback } from "react";
import type { SetStateAction } from "react";

export function useAutoSlide(count: number, interval = 5000) {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [resetKey, setResetKey] = useState(0);

    useEffect(() => {
        if (!count) return;
        const timer = setInterval(() => {
            setCurrentIndex(prev => (prev + 1) % count);
        }, interval);
        return () => clearInterval(timer);
    }, [count, interval, resetKey]);

    const navigate = useCallback((value: SetStateAction<number>) => {
        setCurrentIndex(value);
        setResetKey(k => k + 1);
    }, []);

    return [currentIndex, navigate] as const;
}
