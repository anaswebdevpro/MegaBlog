/* eslint-disable no-unreachable */
/* eslint-disable no-useless-catch */
import conf from "../conf/conf";

import { Client, Account, ID, TablesDB, Storage, Query } from "appwrite";

export class Service {
  client = new Client();
  tablesDB;
  storage;
  constructor() {
    this.client.setEndpoint(conf.appwriteUrl).setProject(conf.projectId);
    this.tablesDB = new TablesDB(this.client);
    this.storage = new Storage(this.client);
  }

  async createPost({ title, slug, content, featuredImage, status, userId }) {
    try {
      return await this.tablesDB.createRow({
        databaseId: conf.databaseId,
        tableId: conf.tableId,
        rowId: ID.unique(),
        data: {
          title,
          slug,
          content,
          featuredImage,
          status,
          userId,
        },
      });
    } catch (error) {
      throw error;
    }
  }

  async updatePost(slug, { title, content, featuredImage, status }) {
    try {
      return await this.databases.updateRow({
        databaseId: conf.databaseId,
        tableId: conf.tableId,
        rowId: slug,
        data: {
          title,
          content,
          featuredImage,
          status,
        },
      });
    } catch (error) {
      throw error;
    }
  }

  async deletePost(slug) {
    try {
      return await this.databases.deleteRow({
        databaseId: conf.databaseId,
        tableId: conf.tableId,
        rowId: slug,
      });
    } catch (error) {
      throw error;
    }

    return false;
  }

  async getPost(slug) {
    try {
      return await this.tablesDB.getRow({
        databaseId: conf.databaseId,
        tableId: conf.tableId,
        rowId: slug,
      });
    } catch (error) {
      throw error;
    }
  }

  async listPosts(){
    try {
        return await this.tablesDB.listRows({
            databaseId: conf.databaseId,
            tableId: conf.tableId,
            queries: [Query.equal("status","active")]
        });
        
    } catch (error) {
        throw error;
        
    }
  }

  async uploadFile(file) {
    try {
      return await this.storage.createFile({
        bucketId: conf.storageId,
        fileId: ID.unique(),
        file: file,
      });
    } catch (error) {
      throw error;
      return false;
    }}

    async deleteFile(fileId) {
        try {
            return await this.storage.deleteFile({
                bucketId: conf.storageId,
                fileId: fileId,
            });
        } catch (error) {
            throw error;
            return false;
        }
    }

    getFilePreview(fileId) {
        return this.storage.getFilePreview({
            bucketId: conf.storageId,
            fileId: fileId,
        });
    }

    getFileDownload(fileId) {
        return this.storage.getFileDownload({
            bucketId: conf.storageId,
            fileId: fileId,
        });

    }
}



const service = new Service();

export default service;
