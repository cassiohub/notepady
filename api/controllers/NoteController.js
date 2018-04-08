/**
 * NoteController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
  
	get: async (req, res) => {
		const { name } = req.params;
		const { format } = req.query;
		const note = await Note.findOrCreate({ name }, { name, body: '' });

		return format === 'json' ?
			res.send({ ...note }) :
			res.render('pages/details', { note });
	},

	put: async (req, res) => {
		const { name, body } = req.body;

		try {
			const note = await Note.update({ name }, { body }).fetch();
			console.log(note);
			return res.send({ ...note });
		} catch (err) {
			return res.send(false);
		}
		
	}

};

