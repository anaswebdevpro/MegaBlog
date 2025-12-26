const conf = {
  appwriteUrl: String(import.meta.env.VITE_BASE_URL),
  projectId: String(import.meta.env.VITE_PROJECT_ID),
  databaseId: String(import.meta.env.VITE_DATABASE_ID),
  tableId: String(import.meta.env.VITE_TABLE_ID),
  storageId: String(import.meta.env.VITE_STORAGE_ID),
};

export default conf;
