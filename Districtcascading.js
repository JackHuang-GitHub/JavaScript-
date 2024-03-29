class DistrictCascading{
    constructor(group){
      const elements = group.getElementsByTagName('select');

      this.first=elements[0];
      this.second=elements[1];
      this.third=elements[2];
        this.cities;
      //初始化
      this.first.appendChild(new Option('--请选择--',0));

      for (let key in data) {
        this.first.appendChild(new Option(data[key].name,key));
      }

      this.second.appendChild(new Option('--请选择--',0));
      this.third.appendChild(new Option('--请选择--',0));


      this.changeProvince=this.changeProvince.bind(this);
      this.changeCity=this.changeCity.bind(this);
      this.first.addEventListener('change',this.changeProvince);
      this.second.addEventListener('change',this.changeCity);
    }

    changeProvince(){
        const code=this.first.options[this.first.selectedIndex].value;
        this.cities=data[code].child;
        this.second.length=1;
        this.third.length=1;
        for(let key in this.cities){
            this.second.appendChild(new Option(this.cities[key].name,key));
        }
    }

    changeCity(){
        const code =this.second.options[this.second.selectedIndex].value;
       const districts=this.cities[code].child;

       for(let key in districts){
        this.third.appendChild(new Option(districts[key],key))
       }
    }

}