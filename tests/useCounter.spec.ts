import { describe, it, expect } from 'vitest';
import { renderHook, act } from '@testing-library/react';
import useCounter from '../src/hooks/features/homepage/useCounter';

describe('useCounter Hook', () => {
    it('initializes count to 0', () => {
        const { result } = renderHook(() => useCounter());
        expect(result.current.count).toBe(0);
    });

    it('increments count', () => {
        const { result } = renderHook(() => useCounter());
        act(() => {
            result.current.increment();
        });
        expect(result.current.count).toBe(1);
    });

    // No decrement test since the hook doesn't provide a decrement function
});