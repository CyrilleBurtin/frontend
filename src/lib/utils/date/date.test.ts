import { describe, expect, test } from 'vitest';

import { isoToDate } from './date';

describe('Date', () => {
  test('Should return date in dd/mm/yyyy date', () => {
    const date = '2024-11-18T09:24:06.675Z';
    const result = isoToDate(date);

    expect(result).toBe('18/11/2024');
  });

  test('Should return date in plain text', () => {
    const date = '2024-11-18';
    const result = isoToDate(date);

    expect(result).toBe('18/11/2024');
  });
});
