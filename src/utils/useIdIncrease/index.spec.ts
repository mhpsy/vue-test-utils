import {useIdIncrease} from "./index";
import {describe, it, expect} from 'vitest'


describe('useIdIncrease', () => {
    it('should return a string', () => {
        expect(typeof useIdIncrease()).toBe('string');
    });
    it('should return a string with prefix', () => {
        expect(useIdIncrease({
            prefix: 'prefix'
        })).toContain('prefix');
    });
    it('should return a string with prefix and key', () => {
        expect(useIdIncrease({
            prefix: 'prefix',
            key: 'key'
        })).toContain('prefix');
    });
    it('should return a string with prefix and key,and second call should be the same value', () => {
        expect(useIdIncrease({
            prefix: 'prefix',
            key: 'key',
        })).toEqual(useIdIncrease({
            prefix: 'prefix',
            key: 'key',
        }));
    });
});

