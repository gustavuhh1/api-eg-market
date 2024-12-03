
const categorias = [
    {
      "categoria": "Alimentos",
      "classCategoria": 'ph ph-bowl-food'
    },
    {
      "categoria": "Padaria",
      "classCategoria": 'ph ph-bread'
    },
    {
      "categoria": "Enlatados",
      "classCategoria": 'ph ph-fish-simple'
    },
    {
      "categoria": "Bebidas",
      "classCategoria": 'ph ph-wine'
    },
    {
      "categoria": "Higiene Pessoal",
      "classCategoria": 'ph ph-tooth'
    },
    {
      "categoria": "Limpeza e Descartáveis",
      "classCategoria": 'ph ph-toilet-paper'
    },
    {
      "categoria": "Alimentos Congelados",
      "classCategoria": 'ph ph-ice-cream'
    }
  ]
  
  const categories = document.querySelector('.categoriesList')
  
  categorias.forEach((categoria) => {
    const li = document.createElement('li');
    li.classList.add("category");
  
    const categoryIcon = document.createElement('i');
    const sepClasses = categoria.classCategoria.split(' ')
    categoryIcon.classList.add(sepClasses[0], sepClasses[1])
    categoryIcon.classList.add('categoryIcon');
    categoryIcon.style.fontSize = '10rem'
  
    const categoryName = document.createElement('h3');
    categoryName.textContent = categoria.categoria;
    li.append(categoryIcon, categoryName)
    categories.appendChild(li)
  })
  
  