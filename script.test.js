import { expect,describe, test, vi, } from "vitest";

global.document = {
    getElementById: vi.fn().mockReturnValue({
      innerText: '',
      value: '',
      style: { display: 'none' },
      addEventListener: vi.fn(),
      innerHTML: '',
    })
  };
  
  // Mock de location.reload
  global.location = {
    reload: vi.fn()
  };

  const { AlphabetVersMorse, MorseVersAlphabet } = require('./script.js');

  describe('AlphabetVersMorse', () => {
    test('converts "SOS" to "... --- ..."', () => {
      expect(AlphabetVersMorse("SOS")).toBe("... --- ...");
    });
  });

    describe('MorseVersAlphabet', () => {
        test('converts "... --- ..." to "SOS"', () => {
            expect(MorseVersAlphabet("... --- ...")).toBe("Sos");
        });
    });