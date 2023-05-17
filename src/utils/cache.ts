import fs from 'fs';

const CACHE_FILE_PATH = 'cache.json';

// Load cache data from file
let cache: Record<string, any> = {};
try {
  const cacheFileData = fs.readFileSync(CACHE_FILE_PATH, 'utf-8');
  cache = JSON.parse(cacheFileData);
} catch (error) {
  console.error('Error loading cache file:', error);
}

// Function to save cache data to file
const saveCacheToFile = () => {
  try {
    const cacheData = JSON.stringify(cache);
    fs.writeFileSync(CACHE_FILE_PATH, cacheData, 'utf-8');
    console.log('Cache data saved to file.');
  } catch (error) {
    console.error('Error saving cache data to file:', error);
  }
};

// Function to set cache data
export const setCache = (key: string, data: any) => {
  cache[key] = data;
  saveCacheToFile();
};

// Function to get cache data
export const getCache = (key: string): any => {
  return cache[key];
};
