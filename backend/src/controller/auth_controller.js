import { supabase } from '../utils/supabaseConfig.js';

export const getUser = async (req, res) => {
  const { id } = req.body;

  let query = supabase
    .from('user')
    .select('*')
    .eq('id', id);

  const { data, error } = await query;
    

  if (error) {
    res.send(error);
    return;
  }

  res.send(data);
};


export const createUser = async (req, res) => {
  const user = {
    user_id : req.body.user_id,
    name : req.body.name,
    surname : req.body.surname,
  };

  const { data, error } = await supabase.from('user').insert([user]);

  if (error) {
    res.send(error);
    return;
  }

  res.send(data);
};

export const registration = async (req, res) => {
  const { email, password } = req.body;

  const { data, error } = await supabase.auth.signUp({
    email,
    password,
  });

}