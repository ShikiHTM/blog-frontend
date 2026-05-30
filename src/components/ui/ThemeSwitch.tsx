import React, { useState, useEffect } from 'react';
import {motion, AnimatePresence} from 'motion/react';
import { useTheme } from 'next-themes';
import { FiMoon, FiSun } from 'react-icons/fi';
import Image from 'next/image';

const iconAnimation = {
    initial: { opacity: 0, rotate: -90, scale: 0},
    animate: { opacity: 1, rotate: 0, scale: 1},
    exit: { opacity: 0, rotate: 90, scale: 0},
    transition: { duration: 0.3 }
}

const ThemeSwitch: React.FC<{ size: string | number }> = ({ size }) => {
    const [mounted, setMounted] = useState(false);
    const { resolvedTheme, setTheme } = useTheme();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setMounted(true);
        setLoading(false);
    }, [])

    if (!mounted) return (
        <Image
            src="data:image/svg+xml;base64,PHN2ZyBzdHJva2U9IiNGRkZGRkYiIGZpbGw9IiNGRkZGRkYiIHN0cm9rZS13aWR0aD0iMCIgdmlld0JveD0iMCAwIDI0IDI0IiBoZWlnaHQ9IjIwMHB4IiB3aWR0aD0iMjAwcHgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHJlY3Qgd2lkdGg9IjIwIiBoZWlnaHQ9IjIwIiB4PSIyIiB5PSIyIiBmaWxsPSJub25lIiBzdHJva2Utd2lkdGg9IjIiIHJ4PSIyIj48L3JlY3Q+PC9zdmc+Cg=="
            width={36}
            height={36}
            sizes="36x36"
            alt="Loading Light/Dark Toggle"
            priority={false}
            title="Loading Light/Dark Toggle"
        />
    )

    return (
        <button
            onClick={() => setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')}
            disabled={loading}
            className='relative flex items-center justify-center rounded-md p-2 text-text hover:text-muted transition-colors'
            aria-label='Toggle theme'
        >
            <AnimatePresence mode='popLayout' initial={false}>
                {resolvedTheme === 'dark' ? (
                    <motion.div
                        key={"sun-icon"}
                        initial={iconAnimation.initial}
                        animate={iconAnimation.animate}
                        exit={iconAnimation.exit}
                        transition={iconAnimation.transition}
                        className='absolute'
                    >
                        <FiSun size={size}/>
                    </motion.div>
                ) : (
                    <motion.div
                        key={"moon-icon"}
                        initial={iconAnimation.initial}
                        animate={iconAnimation.animate}
                        exit={iconAnimation.exit}
                        transition={iconAnimation.transition}
                        className='absolute'
                    >
                        <FiMoon size={size}/>
                    </motion.div>
                )}
            </AnimatePresence>
        </button>
    )
}

export default ThemeSwitch;
