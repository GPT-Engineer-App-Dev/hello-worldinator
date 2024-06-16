import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, Container, VStack, Button } from '@chakra-ui/react';
import { useSupabaseAuth, SupabaseAuthUI } from '../integrations/supabase/auth.jsx';

const Login = () => {
    const { session, logout } = useSupabaseAuth();
    const navigate = useNavigate();

    useEffect(() => {
        if (session) {
            navigate('/');
        }
    }, [session, navigate]);

    return (
        <Container centerContent>
            <VStack spacing={4}>
                <Box>
                    <SupabaseAuthUI />
                </Box>
                {session && <Button onClick={logout}>Logout</Button>}
            </VStack>
        </Container>
    );
};

export default Login;