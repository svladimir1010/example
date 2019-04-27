export default class Service {
  _apiBase = "https://jsonplaceholder.typicode.com/";
  // _US = "https://jsonplaceholder.typicode.com/users"
  // _TD = "https://jsonplaceholder.typicode.com/todos"

  //    getResource = async ur => {
  //       const data = await fetch(`${this._apiBase}${ur}`)
  //          .then(res => (res.ok ? res : Promise.reject(res)))
  //          .then(body => body.json())
  //          .catch(() => console.log("some WRONG"));

  //       return data;
  //    };

  //    getUsers = async () => {
  //       const res = await this.getResource(`users`);
  //       return console.log(res.map(this._transformDataUsers));
  //    };
  //    _transformDataUsers = data => {
  //       return {
  //          id: data.id,
  //          name: data.name,
  //          email: data.email,
  //          phone: data.phone
  //       };
  //    };

  //    getToDo = async () => {
  //       const res = await this.getResource(`todos`);
  //       return console.log(res.map(this._transformDataToDo));
  //    };
  //    _transformDataToDo = data => {
  //       return {
  //          id: data.id,
  //          title: data.title
  //       };
  //    };

  getResource = async ur => {
    const data = await fetch(ur)
      .then(res => (res.ok ? res : Promise.reject(res)))
      .then(body => body.json())
      .catch(() => this.setState({ error: true }));

    return data;
  };
}
