export interface Company {
  company_id?: number;
  company_name: string;
  company_description?: string;
  logo?: string;
  contact_email: string;
  contact_phone?: string;
  country: string;
  address: string;
  web_url?: string;
  created_at: string;
  updated_at: string;
}

export interface CompanyRegisterForm {
  company_name: string;
  company_description?: string;
  logo?: string;
  contact_email: string;
  contact_phone?: string;
  country: string;
  address: string;
  web_url?: string;
}

export interface StateCompanies {
  companies: Company[];
}

export interface GlobalStateCompaniess {
  companiesState: StateCompanies;
  setCompaniesState: React.Dispatch<React.SetStateAction<StateCompanies>>;
}

export const initialStateCompanies: StateCompanies = {
  companies: [],
};
