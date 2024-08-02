import { useCallback, useRef } from 'react';

const useDebounce = (callback: (...args: any[]) => void, delay: number) => {
    const lastCall = useRef<number | null>(null);

    return useCallback((...args: any[]) => {
        const now = Date.now();

        if (lastCall.current && now - lastCall.current < delay) {
            return;
        }

        lastCall.current = now;
        callback(...args);
    }, [callback, delay]);
};

export default useDebounce;
