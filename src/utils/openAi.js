import OpenAI from 'openai';
import { OPENAI_KEY } from './constants';

const openai = new OpenAI({
  apiKey: OPENAI_KEY,
  // apiKey: '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',
  dangerouslyAllowBrowser: true,
});

export default openai;