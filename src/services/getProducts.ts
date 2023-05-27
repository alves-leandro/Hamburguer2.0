import { Product } from "../types/product";
import { api } from "./api";

interface iGetProductsProps {
  onSuccess: (data: Product[]) => void;
  onFailure: (error: any) => void;
}

export const getProducts = async ({
  onSuccess,
  onFailure,
}: iGetProductsProps) => {
  try {
    const response = await api.get("/products");
    
    const accessToken = localStorage.getItem("@TOKEN")

    api.defaults.headers.common.Authorization = `Bearer ${accessToken}`;

    onSuccess(response.data);

  } catch (error) {
    onFailure(error);
  }
};
