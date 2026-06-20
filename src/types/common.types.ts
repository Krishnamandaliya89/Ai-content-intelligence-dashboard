// src/types/common.types.ts
// Shared utility types used across the application

export interface ApiError {
  status: number;
  message: string;
  data?: unknown;
}

export interface PaginatedResponse<T> {
  data: T[];
  page: number;
  pageSize: number;
  totalResults: number;
  totalPages: number;
}

export interface SelectOption {
  label: string;
  value: string;
}

export type LoadingStatus = "idle" | "pending" | "fulfilled" | "rejected";

export interface WithId {
  id: string;
}

export interface WithTimestamp {
  createdAt: string;
  updatedAt?: string;
}
