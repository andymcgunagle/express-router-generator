import fs from 'fs/promises';

// NOTE: No longer using this function.

const createNewDirectory = async (newDirName = 'newDir') => {
  const currentWorkingDirectory = process.cwd();

  const randomNum = (Math.floor(Math.random() * (1000 - 1) + 1)).toString();

  const newDirPath = `${currentWorkingDirectory}/createRouterFunctions/../${newDirName}${randomNum}`;

  try {
    await fs.mkdir(newDirPath);

    return newDirPath;
  } catch (error) {
    console.error(error);
  };
};

// TESTS
// console.log(await createNewDirectory());
// console.log(await createNewDirectory('myNewDir'));

export default createNewDirectory;