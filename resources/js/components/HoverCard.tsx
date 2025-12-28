import { Card, Flex, Box, Text, Heading } from '@radix-ui/themes';
import React, { useState } from 'react';

interface HoverCardProps {
    icon: string;
    title: string;
    subtitle: string;
}

export default function HoverCard({ icon, title, subtitle }: HoverCardProps) {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <Card 
            style={{ 
                backgroundColor: '#0A0C16', 
                borderColor: isHovered ? '#D42A38' : 'rgba(255,255,255,0.1)',
                transform: isHovered ? 'translateY(-5px)' : 'none',
                boxShadow: isHovered ? '0 10px 30px -10px rgba(212, 42, 56, 0.3)' : 'none',
                transition: 'all 0.3s ease',
                cursor: 'pointer'
            }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <Flex direction="column" gap="1">
                <Box width="32px" height="32px" style={{ backgroundColor: 'rgba(212, 42, 56, 0.1)', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '8px' }}>
                    <Text size="3">{icon}</Text>
                </Box>
                <Heading size="3">{title}</Heading>
                <Text size="1" color="gray">{subtitle}</Text>
            </Flex>
        </Card>
    );
}
