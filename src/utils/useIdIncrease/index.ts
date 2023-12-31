let id = 0;
const map = new Map<any, number>();

export function useIdIncrease({
                                  prefix = 'id',
                                  key,
                              }: {
    prefix?: string,
    key?: any
} = {}): string {
    if (map.has(key)) {
        return `${prefix}-${map.get(key)}`;
    }
    const useId = id++;
    if (key)
        map.set(key, useId);
    return `${prefix}-${useId}`;
}