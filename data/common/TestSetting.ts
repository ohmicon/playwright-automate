interface Data {
  site: string;
  username: string;
  password: string;
}

const data: Data = {
  site: "",
  username: "",
  password: "",
};

const LoginSetting = (site: string): any => {
  switch (site) {
    case "soken":
      data.site = "https://soken-cm-test.iconframework.com/";
      data.username = "admin";
      data.password = "123456";
      return data;

    case "maison":
      data.site = "https://maison-cm-test.iconframework.com";
      data.username = "icon003";
      data.password = "123456";
      return data;

    case "proud":
      data.site = "https://proud-cm-test.iconframework.com/";
      data.username = "admin";
      data.password = "123456";
      return data;

    case "falcrum":
      data.site = "https://falcrumasia-cm-test.iconframework.com/";
      data.username = "admin";
      data.password = "123456";
      return data;

    case "siamnuwat":
      data.site = "https://siamnuwat-cm-test.iconframework.com";
      data.username = "admin";
      data.password = "123456";
      return data;

    default:
      return 'ไม่มี site นี้';
  }
};

export { LoginSetting };
