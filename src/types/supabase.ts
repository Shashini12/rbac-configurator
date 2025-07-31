export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json }
  | Json[];

export interface Database {
  public: {
    Tables: {
      permissions: {
        Row: {
          id: string;
          name: string;
          description: string | null;
          created_at: string;
        };
        Insert: {
          name: string;
          description?: string;
          created_at?: string;
        };
        Update: {
          name?: string;
          description?: string;
        };
      };
      roles: {
        Row: {
          id: string;
          name: string;
          created_at: string;
        };
        Insert: {
          name: string;
          created_at?: string;
        };
        Update: {
          name?: string;
        };
      };
      role_permissions: {
        Row: {
          role_id: string;
          permission_id: string;
        };
        Insert: {
          role_id: string;
          permission_id: string;
        };
        Update: {
          role_id?: string;
          permission_id?: string;
        };
      };
      user_roles: {
        Row: {
          user_id: string;
          role_id: string;
        };
        Insert: {
          user_id: string;
          role_id: string;
        };
        Update: {
          user_id?: string;
          role_id?: string;
        };
      };
    };
  };
}