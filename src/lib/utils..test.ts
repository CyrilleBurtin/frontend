import { describe, expect, it } from 'vitest';

import { cn } from './utils';

describe('cn tailwind merge', () => {
  it('should merge classNames', () => {
    const classes = cn('flex flex-row', { 'gap-4': true });

    expect(classes).toBe('flex flex-row gap-4');
  });
});
