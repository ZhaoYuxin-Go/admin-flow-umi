import React, { useState, useEffect, useCallback, useRef } from 'react';
import { Button } from 'antd';

const Counter: React.FC = () => {
    const [count, setCount] = useState<number>(0);
    const timer = useRef<any>();

    const clearTimer = () => {
        timer.current && clearInterval(timer.current);
    };

    const polling = useCallback(() => {
        clearTimer();
        timer.current = setInterval(() => {
            setCount((c) => c + 1);
        }, 1000);
    }, []);

    useEffect(() => {
        polling();
        return () => clearInterval(timer.current);
    });

    const run = () => {
        polling();
    };

    const pause = () => {
        clearTimer();
    };

    const reset = () => {
        setCount(0);
        // ??????????? 万能的定时器 ?????????????
        setTimeout(() => {
            clearTimer();
        });
    };

    return (
        <>
            <div>{count}</div>
            <Button onClick={run}>run</Button>
            <Button onClick={pause}>pause</Button>
            <Button onClick={reset}>reset</Button>
        </>
    );
};

export default Counter;
