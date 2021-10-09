class HomeCtrl {
  constructor($scope) {
    'ngInject';

    this.name = 'AngularJS';

    const searchFields = ['first_name', 'last_name', 'email'];

    this.data = [
      {
        id: 1,
        first_name: 'Jeanette',
        last_name: 'Penddreth',
        email: 'jpenddreth0@census.gov',
        gender: 'Female',
      },
      {
        id: 2,
        first_name: 'Giavani',
        last_name: 'Frediani',
        email: 'gfrediani1@senate.gov',
        gender: 'Male',
      },
      {
        id: 3,
        first_name: 'Noell',
        last_name: 'Bea',
        email: 'nbea2@imageshack.us',
        gender: 'Female',
      },
      {
        id: 4,
        first_name: 'Willard',
        last_name: 'Valek',
        email: 'wvalek3@vk.com',
        gender: 'Male',
      },
    ];
    this.newC = {};

    this.filterByGender = (male, female) => (row) => {
      if (male && female) {
        return true;
      }
      if (male) {
        return row.gender == 'Male';
      }
      if (female) {
        return row.gender == 'Female';
      }
      return true;
    };

    this.searchBy = (search) => (row) => {
      if (search) {
        return searchFields.reduce(
          (result, field) =>
            result || row[field].toLowerCase().includes(search.toLowerCase()),

          false
        );
      }
      return true;
    };

    this.add = () => {
      this.newC.id = this.data.reduce(
        (r1, r2) => (r1.id > r2.id ? r1.id : r2.id),
        {
          id: 0,
        }
      );
      this.newC.id++;
      this.data.push(this.newC);
      this.newC = {};
    };
  }
}

export default HomeCtrl;
