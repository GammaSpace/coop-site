import { redirect } from '@sveltejs/kit';

export function load({params}) {
  if ( params.slug == "sux" ) {
  	throw redirect(308, '/games/street-uni-x');
  }
}
