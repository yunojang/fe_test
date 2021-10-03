import React, { useState } from "react";

function useForm<T>() {
  const [formData, setFormData] = useState<T>();
  const onChange = (e: React.KeyboardEvent<HTMLInputElement>) => {};

  return {};
}

export default useForm;
