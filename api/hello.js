export default function handler(req, res) {
    console.log('API called');
    
    
  res.status(200).json({ message: 'Hello from the server!' });
}
