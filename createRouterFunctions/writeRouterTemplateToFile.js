import fs from 'fs/promises';
import createNewDirectory from './createNewDirectory.js';
import createRouterTemplate from './createRouterTemplate.js';

export const writeRouterTemplateToFile = async (template, newDirName = 'newRouter') => {
  const newDirPath = await createNewDirectory(newDirName);

  // Create template text
  const fileText = createRouterTemplate(template);

  try {
    // Write text to file, return promise
    const promise = await fs.writeFile(`${newDirPath}/${newDirName}.js`, fileText);

    return promise;
  } catch (error) {
    console.error(error);
  };
};

export default writeRouterTemplateToFile;