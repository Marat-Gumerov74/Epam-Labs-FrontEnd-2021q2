Home task #8 
   1) Describe base class Entity that can store name
   - базовый класс - Автомобиль (Transport) 
                     поле: модель (автомобиля)
   2) Implement child classes Stuff, Box, User. 
      Box can store some stuff[]. Every box belongs to user
      - дочерний класс 
           легковой автомобиль:
               поле engine;
               поле weight;
               поле color;
               поле seats;
        грузовой автомобиль:
               имеет поле грузоподъемность: capacity[weight, volume]
               поле engine;
               поле weight;
               поле color;
           автобус;
               поле engine;
               поле weight;
               поле color;
               поле seats;
   3) Add example of usage of these classes, e.g., create some instances, display data related to them
        Добавим класс Persone
               поле name
               поле owns;  - поместим туда экземпляры авто.
   4) Push code to repo “sweet sugar”
