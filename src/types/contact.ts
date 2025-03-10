export interface ContactInfo {
  title: string;
  subtitle: string;
  description: string;
  contactMethods: {
    title: string;
    description: string;
    icon: string;
    value: string;
    link: string;
  }[];
  form: {
    name: {
      label: string;
      placeholder: string;
    };
    email: {
      label: string;
      placeholder: string;
    };
    subject: {
      label: string;
      placeholder: string;
    };
    message: {
      label: string;
      placeholder: string;
    };
    submitButton: string;
  };
} 