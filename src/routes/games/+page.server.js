import { redirect } from '@sveltejs/kit';

export function load({params}) {
  if ( params == "" ) {
  	throw redirect(308, '/');
  }
}
