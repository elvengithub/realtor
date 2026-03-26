import { createClient } from "./supabase";

export interface CMSResult {
  success: boolean;
  data?: any;
  error?: string;
}

/**
 * Uploads an image to the Supabase 'site-images' bucket
 * @param file The file to upload
 * @param pathPrefix Optional prefix for the filename (e.g., 'hero', 'property-1')
 */
export async function uploadImage(file: File, pathPrefix: string = "general"): Promise<CMSResult> {
  const supabase = createClient();
  const fileExt = file.name.split('.').pop();
  const fileName = `${pathPrefix}-${Date.now()}.${fileExt}`;
  const filePath = fileName;

  const { data, error } = await supabase.storage
    .from("site-images")
    .upload(filePath, file);

  if (error) {
    return { success: false, error: error.message };
  }

  const { data: { publicUrl } } = supabase.storage
    .from("site-images")
    .getPublicUrl(filePath);

  return { success: true, data: publicUrl };
}

/**
 * Updates a record in a specific table
 * @param table The Supabase table name
 * @param id The record ID (string or number)
 * @param updates The object containing the fields to update
 */
export async function updateRecord(
  table: string,
  id: string | number,
  updates: any
): Promise<CMSResult> {
  const supabase = createClient();
  
  const { data, error } = await supabase
    .from(table)
    .update(updates)
    .eq("id", id)
    .select()
    .single();

  if (error) {
    return { success: false, error: error.message };
  }

  return { success: true, data };
}

/**
 * Fetches all content sections for the CMS
 */
export async function fetchAllContent(): Promise<CMSResult> {
  const supabase = createClient();
  const { data, error } = await supabase
    .from("site_content")
    .select("*")
    .order("section");

  if (error) {
    return { success: false, error: error.message };
  }

  return { success: true, data };
}
