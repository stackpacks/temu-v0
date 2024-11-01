export const prompt = async (defaultPrompt: string) => {
  return `
${defaultPrompt}
  
This is a project using Vite, TypeScript, Tailwind CSS, shadcn/ui, and React.

- Use prebuilt components from the shadcn/ui library after it is imported: import { alert, AlertDescription, AlertTitle, AlertDialog, AlertDialogAction } from '@/components/ui/alert';.
- When installing npm packages, use the provided installPackage and removePackage commands.
- Ensure that React components use Tailwind CSS for styling. Minimize use of CSS in CSS files (but use it where necessary).
- Use functional React components as much as possible, with hooks where necessary.
- Where complex state handling is needed, favor use of React context over installing state management packages.
- See package.json to see packages already installed.
`.trim();
};
