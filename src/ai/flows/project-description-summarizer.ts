'use server';
/**
 * @fileOverview This file defines a Genkit flow for summarizing project descriptions.
 *
 * - summarizeProjectDescription - A function that takes a long project description and returns a concise summary.
 * - SummarizeProjectDescriptionInput - The input type for the summarizeProjectDescription function.
 * - SummarizeProjectDescriptionOutput - The return type for the summarizeProjectDescription function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const SummarizeProjectDescriptionInputSchema = z.object({
  longDescription: z
    .string()
    .describe('The full, detailed description of the project.'),
});
export type SummarizeProjectDescriptionInput = z.infer<
  typeof SummarizeProjectDescriptionInputSchema
>;

const SummarizeProjectDescriptionOutputSchema = z.object({
  shortSummary: z
    .string()
    .describe(
      'A concise, AI-powered summary of the project description, highlighting key aspects and context.'
    ),
});
export type SummarizeProjectDescriptionOutput = z.infer<
  typeof SummarizeProjectDescriptionOutputSchema
>;

export async function summarizeProjectDescription(
  input: SummarizeProjectDescriptionInput
): Promise<SummarizeProjectDescriptionOutput> {
  return summarizeProjectDescriptionFlow(input);
}

const prompt = ai.definePrompt({
  name: 'summarizeProjectDescriptionPrompt',
  input: {schema: SummarizeProjectDescriptionInputSchema},
  output: {schema: SummarizeProjectDescriptionOutputSchema},
  prompt: `You are an AI assistant that summarizes project descriptions.

  Please provide a concise summary of the following project description, highlighting the key aspects and context:

  {{longDescription}}`,
});

const summarizeProjectDescriptionFlow = ai.defineFlow(
  {
    name: 'summarizeProjectDescriptionFlow',
    inputSchema: SummarizeProjectDescriptionInputSchema,
    outputSchema: SummarizeProjectDescriptionOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
