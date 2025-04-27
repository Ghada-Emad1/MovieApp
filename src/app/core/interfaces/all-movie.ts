export interface AllMovie {
  title: string;
  poster_path: string;
  overview: string;
  media_type: string;
  vote_average: number;
  original_name: string;
  name: string;
  id: number;
}

export interface MovieList {
  title: string;
  id: number;
  poster_path: string;
  overview: string;
  release_date: string;
  vote_average: number;
  name: string;
  original_title: string;
}

export interface MovieDetails {
  overview: string;
  title: string;
  poster_path: string;
  release_date: string;
  vote_average: number;

}

export interface TvList {
  title: string;
  id: number;
  poster_path: string;
  overview: string;
  first_air_date: string;
  vote_average: number;
  name: string;
  original_name: string;
}

export interface tvDetailsList {
  name: string;

  original_name: string;
  poster_path: string;
  last_air_date: string;
  number_of_episodes: number;
  number_of_seasons: number;
  overview: string;
  vote_average: string;
  
}

export interface ArtistProfile {
  id: number;
  name: string;
  original_name: string;
  profile_path: string;
  known_for_department: string;
  gender: number;
}

export interface ArtistInfo {
  birthday: string;
  name: string;
  gender: number;
  homepage: string;
  known_for_department: string;
  profile_path: string;
  biography: string;
  place_of_birth: string;
}