export interface Movie {
    id: number;
    title: string;
    genre: string;
    posterUrl: string;
    rating: string;
    description: string;
    duration: number;
  }
  
  const movies: Movie[] = [
    {
      id: 1,
      title: 'DO YOU SEE WHAT I SEE',
      genre: 'Horror',
      posterUrl: 'https://cdn.cgv.id/uploads_v2/movie/compressed/24006500.jpg?version=2',
      rating: '17+',
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
      duration: 120
    },
    {
      id: 2,
      title: 'VINA: SEBELUM 7 HARI',
      genre: 'Horror',
      posterUrl: 'https://cdn.cgv.id/uploads_v2/movie/compressed/24010700.jpg?version=1',
      rating: '17+',
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
      duration: 200
    },
    {
      id: 3,
      title: 'IF: IMAGINARY FRIENDS',
      genre: 'Comedy',
      posterUrl: 'https://cdn.cgv.id/uploads_v2/movie/compressed/24013100.jpg?version=1',
      rating: 'SU',
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
      duration: 100
    },
    {
      id: 4,
      title: 'TAROT',
      genre: 'Horror',
      posterUrl: 'https://cdn.cgv.id/uploads_v2/movie/compressed/24013300.jpg?version=1',
      rating: '17+',
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
      duration: 100
    },
    {
      id: 5,
      title: 'HOW TO MAKE MILLIONS BEFORE GRANDMA DIES',
      genre: 'Comedy',
      posterUrl: 'https://cdn.cgv.id/uploads_v2/movie/compressed/24012700.jpg?version=1',
      rating: 'SU',
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
      duration: 100
    },
    {
      id: 6,
      title: 'KINGDOM OF THE PLANET OF THE APES',
      genre: 'Action',
      posterUrl: 'https://cdn.cgv.id/uploads_v2/movie/compressed/24013000.jpg?version=1',
      rating: '13+',
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
      duration: 100
    },
    {
      id: 7,
      title: 'RASCAL DOES NOT DREAM OF A KNAPSACK KID',
      genre: 'Romance',
      posterUrl: 'https://cdn.cgv.id/uploads_v2/movie/compressed/24012300.jpg?version=1',
      rating: '13+',
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
      duration: 100
    },
    {
      id: 8,
      title: 'THE ARCHITECTURE OF LOVE',
      genre: 'Romance',
      posterUrl: 'https://cdn.cgv.id/uploads_v2/movie/compressed/24011500.jpg?version=2',
      rating: '13+',
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
      duration: 100
    },
    {
      id: 9,
      title: 'BADARAWUHI DI DESA PENARI',
      genre: 'Horror',
      posterUrl: 'https://cdn.cgv.id/uploads_v2/movie/compressed/24003200.jpg?version=3',
      rating: '17+',
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
      duration: 100
    },
    {
      id: 10,
      title: 'THE ROUNDUP: PUNISHMENT',
      genre: 'Action',
      posterUrl: 'https://cdn.cgv.id/uploads_v2/movie/compressed/24011900.jpg?version=1',
      rating: '13+',
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
      duration: 100
    }
  ];
  
  export default movies;
  