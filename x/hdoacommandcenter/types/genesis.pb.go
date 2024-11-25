// Code generated by protoc-gen-gogo. DO NOT EDIT.
// source: hdoacommandcenter/hdoacommandcenter/genesis.proto

package types

import (
	fmt "fmt"
	_ "github.com/cosmos/gogoproto/gogoproto"
	proto "github.com/cosmos/gogoproto/proto"
	io "io"
	math "math"
	math_bits "math/bits"
)

// Reference imports to suppress errors if they are not otherwise used.
var _ = proto.Marshal
var _ = fmt.Errorf
var _ = math.Inf

// This is a compile-time assertion to ensure that this generated file
// is compatible with the proto package it is being compiled against.
// A compilation error at this line likely means your copy of the
// proto package needs to be updated.
const _ = proto.GoGoProtoPackageIsVersion3 // please upgrade the proto package

// GenesisState defines the hdoacommandcenter module's genesis state.
type GenesisState struct {
	Params          Params       `protobuf:"bytes,1,opt,name=params,proto3" json:"params"`
	CommerceList    []Commerce   `protobuf:"bytes,2,rep,name=commerceList,proto3" json:"commerceList"`
	CommerceCount   uint64       `protobuf:"varint,3,opt,name=commerceCount,proto3" json:"commerceCount,omitempty"`
	GovernanceList  []Governance `protobuf:"bytes,4,rep,name=governanceList,proto3" json:"governanceList"`
	GovernanceCount uint64       `protobuf:"varint,5,opt,name=governanceCount,proto3" json:"governanceCount,omitempty"`
	DomainList      []Domain     `protobuf:"bytes,6,rep,name=domainList,proto3" json:"domainList"`
	DomainCount     uint64       `protobuf:"varint,7,opt,name=domainCount,proto3" json:"domainCount,omitempty"`
	ComplianceList  []Compliance `protobuf:"bytes,8,rep,name=complianceList,proto3" json:"complianceList"`
	ComplianceCount uint64       `protobuf:"varint,9,opt,name=complianceCount,proto3" json:"complianceCount,omitempty"`
	FactoryList     []Factory    `protobuf:"bytes,10,rep,name=factoryList,proto3" json:"factoryList"`
	FactoryCount    uint64       `protobuf:"varint,11,opt,name=factoryCount,proto3" json:"factoryCount,omitempty"`
}

func (m *GenesisState) Reset()         { *m = GenesisState{} }
func (m *GenesisState) String() string { return proto.CompactTextString(m) }
func (*GenesisState) ProtoMessage()    {}
func (*GenesisState) Descriptor() ([]byte, []int) {
	return fileDescriptor_351d75765733a87f, []int{0}
}
func (m *GenesisState) XXX_Unmarshal(b []byte) error {
	return m.Unmarshal(b)
}
func (m *GenesisState) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	if deterministic {
		return xxx_messageInfo_GenesisState.Marshal(b, m, deterministic)
	} else {
		b = b[:cap(b)]
		n, err := m.MarshalToSizedBuffer(b)
		if err != nil {
			return nil, err
		}
		return b[:n], nil
	}
}
func (m *GenesisState) XXX_Merge(src proto.Message) {
	xxx_messageInfo_GenesisState.Merge(m, src)
}
func (m *GenesisState) XXX_Size() int {
	return m.Size()
}
func (m *GenesisState) XXX_DiscardUnknown() {
	xxx_messageInfo_GenesisState.DiscardUnknown(m)
}

var xxx_messageInfo_GenesisState proto.InternalMessageInfo

func (m *GenesisState) GetParams() Params {
	if m != nil {
		return m.Params
	}
	return Params{}
}

func (m *GenesisState) GetCommerceList() []Commerce {
	if m != nil {
		return m.CommerceList
	}
	return nil
}

func (m *GenesisState) GetCommerceCount() uint64 {
	if m != nil {
		return m.CommerceCount
	}
	return 0
}

func (m *GenesisState) GetGovernanceList() []Governance {
	if m != nil {
		return m.GovernanceList
	}
	return nil
}

func (m *GenesisState) GetGovernanceCount() uint64 {
	if m != nil {
		return m.GovernanceCount
	}
	return 0
}

func (m *GenesisState) GetDomainList() []Domain {
	if m != nil {
		return m.DomainList
	}
	return nil
}

func (m *GenesisState) GetDomainCount() uint64 {
	if m != nil {
		return m.DomainCount
	}
	return 0
}

func (m *GenesisState) GetComplianceList() []Compliance {
	if m != nil {
		return m.ComplianceList
	}
	return nil
}

func (m *GenesisState) GetComplianceCount() uint64 {
	if m != nil {
		return m.ComplianceCount
	}
	return 0
}

func (m *GenesisState) GetFactoryList() []Factory {
	if m != nil {
		return m.FactoryList
	}
	return nil
}

func (m *GenesisState) GetFactoryCount() uint64 {
	if m != nil {
		return m.FactoryCount
	}
	return 0
}

func init() {
	proto.RegisterType((*GenesisState)(nil), "hdoacommandcenter.hdoacommandcenter.GenesisState")
}

func init() {
	proto.RegisterFile("hdoacommandcenter/hdoacommandcenter/genesis.proto", fileDescriptor_351d75765733a87f)
}

var fileDescriptor_351d75765733a87f = []byte{
	// 419 bytes of a gzipped FileDescriptorProto
	0x1f, 0x8b, 0x08, 0x00, 0x00, 0x00, 0x00, 0x00, 0x02, 0xff, 0x94, 0x93, 0xcd, 0x4a, 0xeb, 0x40,
	0x1c, 0xc5, 0x93, 0xdb, 0x8f, 0x7b, 0xef, 0xa4, 0x2a, 0x0c, 0x2e, 0x4a, 0x17, 0x31, 0x54, 0x17,
	0x01, 0x4d, 0xaa, 0xd5, 0x27, 0x68, 0xc5, 0x22, 0xb8, 0xd0, 0x2a, 0x08, 0x82, 0x8b, 0x31, 0x1d,
	0x6b, 0xc0, 0x64, 0x42, 0x32, 0x8a, 0x7d, 0x0b, 0x1f, 0xab, 0xcb, 0x2e, 0x75, 0x23, 0xd2, 0xbe,
	0x88, 0xe4, 0x3f, 0xd3, 0x26, 0x69, 0x5d, 0x4c, 0x77, 0x99, 0x43, 0xce, 0x39, 0xbf, 0xff, 0x7c,
	0xa0, 0xa3, 0xa7, 0x01, 0x23, 0x1e, 0x0b, 0x02, 0x12, 0x0e, 0x3c, 0x1a, 0x72, 0x1a, 0xb7, 0x56,
	0x95, 0x21, 0x0d, 0x69, 0xe2, 0x27, 0x6e, 0x14, 0x33, 0xce, 0xf0, 0xee, 0xca, 0x0f, 0xee, 0x8a,
	0xd2, 0xd8, 0x1e, 0xb2, 0x21, 0x83, 0xff, 0x5b, 0xe9, 0x97, 0xb0, 0x36, 0x0e, 0x55, 0xda, 0x22,
	0x12, 0x93, 0x40, 0x96, 0x35, 0xda, 0x2a, 0x8e, 0x74, 0x45, 0x63, 0x8f, 0x4a, 0xcf, 0x89, 0xd2,
	0x4c, 0xec, 0x95, 0xc6, 0x21, 0x09, 0x17, 0x2e, 0x25, 0xb6, 0x01, 0x0b, 0x88, 0x1f, 0xae, 0xd3,
	0xe3, 0xb1, 0x20, 0x7a, 0xf6, 0x73, 0x3d, 0x4a, 0x3b, 0xfe, 0x48, 0x3c, 0xce, 0xe2, 0x91, 0xb0,
	0x34, 0x3f, 0x2b, 0xa8, 0xd6, 0x13, 0x67, 0x70, 0xcd, 0x09, 0xa7, 0xf8, 0x1c, 0x55, 0xc5, 0x2e,
	0xd5, 0x75, 0x4b, 0xb7, 0x8d, 0xf6, 0xbe, 0xab, 0x70, 0x26, 0xee, 0x25, 0x58, 0x3a, 0xe5, 0xf1,
	0xd7, 0x8e, 0xd6, 0x97, 0x01, 0xf8, 0x16, 0xd5, 0xe6, 0xdb, 0x77, 0xe1, 0x27, 0xbc, 0xfe, 0xc7,
	0x2a, 0xd9, 0x46, 0xdb, 0x51, 0x0a, 0xec, 0x4a, 0xa3, 0x8c, 0x2c, 0x04, 0xe1, 0x3d, 0xb4, 0x31,
	0x5f, 0x77, 0xd9, 0x4b, 0xc8, 0xeb, 0x25, 0x4b, 0xb7, 0xcb, 0xfd, 0xa2, 0x88, 0xef, 0xd1, 0x66,
	0x76, 0x12, 0x00, 0x50, 0x06, 0x80, 0x96, 0x12, 0x40, 0x6f, 0x61, 0x95, 0x08, 0x4b, 0x61, 0xd8,
	0x46, 0x5b, 0x99, 0x22, 0x30, 0x2a, 0x80, 0xb1, 0x2c, 0xe3, 0x2b, 0x84, 0xc4, 0xe1, 0x02, 0x44,
	0x15, 0x20, 0xd4, 0xb6, 0xf5, 0x14, 0x6c, 0x12, 0x20, 0x17, 0x82, 0x2d, 0x64, 0x88, 0x95, 0x28,
	0xfe, 0x0b, 0xc5, 0x79, 0x29, 0x9d, 0x3e, 0xbb, 0x1f, 0x50, 0xfc, 0x6f, 0x8d, 0xe9, 0xbb, 0x0b,
	0xeb, 0x7c, 0xfa, 0x62, 0x58, 0x3a, 0x7d, 0xa6, 0x08, 0x88, 0xff, 0x62, 0xfa, 0x25, 0x19, 0xdf,
	0x20, 0x43, 0x5e, 0x39, 0xa0, 0x40, 0x40, 0x71, 0xa0, 0x44, 0x71, 0x26, 0x7c, 0x12, 0x21, 0x1f,
	0x83, 0x9b, 0xa8, 0x26, 0x97, 0xa2, 0xdc, 0x80, 0xf2, 0x82, 0xd6, 0xe9, 0x8d, 0xa7, 0xa6, 0x3e,
	0x99, 0x9a, 0xfa, 0xf7, 0xd4, 0xd4, 0xdf, 0x67, 0xa6, 0x36, 0x99, 0x99, 0xda, 0xc7, 0xcc, 0xd4,
	0xee, 0x9c, 0xb4, 0xcb, 0x91, 0x65, 0x8e, 0x7c, 0x18, 0x6f, 0xbf, 0x3c, 0x16, 0x3e, 0x8a, 0x68,
	0xf2, 0x50, 0x85, 0xb7, 0x72, 0xfc, 0x13, 0x00, 0x00, 0xff, 0xff, 0x2f, 0xf3, 0xbf, 0x31, 0xd2,
	0x04, 0x00, 0x00,
}

func (m *GenesisState) Marshal() (dAtA []byte, err error) {
	size := m.Size()
	dAtA = make([]byte, size)
	n, err := m.MarshalToSizedBuffer(dAtA[:size])
	if err != nil {
		return nil, err
	}
	return dAtA[:n], nil
}

func (m *GenesisState) MarshalTo(dAtA []byte) (int, error) {
	size := m.Size()
	return m.MarshalToSizedBuffer(dAtA[:size])
}

func (m *GenesisState) MarshalToSizedBuffer(dAtA []byte) (int, error) {
	i := len(dAtA)
	_ = i
	var l int
	_ = l
	if m.FactoryCount != 0 {
		i = encodeVarintGenesis(dAtA, i, uint64(m.FactoryCount))
		i--
		dAtA[i] = 0x58
	}
	if len(m.FactoryList) > 0 {
		for iNdEx := len(m.FactoryList) - 1; iNdEx >= 0; iNdEx-- {
			{
				size, err := m.FactoryList[iNdEx].MarshalToSizedBuffer(dAtA[:i])
				if err != nil {
					return 0, err
				}
				i -= size
				i = encodeVarintGenesis(dAtA, i, uint64(size))
			}
			i--
			dAtA[i] = 0x52
		}
	}
	if m.ComplianceCount != 0 {
		i = encodeVarintGenesis(dAtA, i, uint64(m.ComplianceCount))
		i--
		dAtA[i] = 0x48
	}
	if len(m.ComplianceList) > 0 {
		for iNdEx := len(m.ComplianceList) - 1; iNdEx >= 0; iNdEx-- {
			{
				size, err := m.ComplianceList[iNdEx].MarshalToSizedBuffer(dAtA[:i])
				if err != nil {
					return 0, err
				}
				i -= size
				i = encodeVarintGenesis(dAtA, i, uint64(size))
			}
			i--
			dAtA[i] = 0x42
		}
	}
	if m.DomainCount != 0 {
		i = encodeVarintGenesis(dAtA, i, uint64(m.DomainCount))
		i--
		dAtA[i] = 0x38
	}
	if len(m.DomainList) > 0 {
		for iNdEx := len(m.DomainList) - 1; iNdEx >= 0; iNdEx-- {
			{
				size, err := m.DomainList[iNdEx].MarshalToSizedBuffer(dAtA[:i])
				if err != nil {
					return 0, err
				}
				i -= size
				i = encodeVarintGenesis(dAtA, i, uint64(size))
			}
			i--
			dAtA[i] = 0x32
		}
	}
	if m.GovernanceCount != 0 {
		i = encodeVarintGenesis(dAtA, i, uint64(m.GovernanceCount))
		i--
		dAtA[i] = 0x28
	}
	if len(m.GovernanceList) > 0 {
		for iNdEx := len(m.GovernanceList) - 1; iNdEx >= 0; iNdEx-- {
			{
				size, err := m.GovernanceList[iNdEx].MarshalToSizedBuffer(dAtA[:i])
				if err != nil {
					return 0, err
				}
				i -= size
				i = encodeVarintGenesis(dAtA, i, uint64(size))
			}
			i--
			dAtA[i] = 0x22
		}
	}
	if m.CommerceCount != 0 {
		i = encodeVarintGenesis(dAtA, i, uint64(m.CommerceCount))
		i--
		dAtA[i] = 0x18
	}
	if len(m.CommerceList) > 0 {
		for iNdEx := len(m.CommerceList) - 1; iNdEx >= 0; iNdEx-- {
			{
				size, err := m.CommerceList[iNdEx].MarshalToSizedBuffer(dAtA[:i])
				if err != nil {
					return 0, err
				}
				i -= size
				i = encodeVarintGenesis(dAtA, i, uint64(size))
			}
			i--
			dAtA[i] = 0x12
		}
	}
	{
		size, err := m.Params.MarshalToSizedBuffer(dAtA[:i])
		if err != nil {
			return 0, err
		}
		i -= size
		i = encodeVarintGenesis(dAtA, i, uint64(size))
	}
	i--
	dAtA[i] = 0xa
	return len(dAtA) - i, nil
}

func encodeVarintGenesis(dAtA []byte, offset int, v uint64) int {
	offset -= sovGenesis(v)
	base := offset
	for v >= 1<<7 {
		dAtA[offset] = uint8(v&0x7f | 0x80)
		v >>= 7
		offset++
	}
	dAtA[offset] = uint8(v)
	return base
}
func (m *GenesisState) Size() (n int) {
	if m == nil {
		return 0
	}
	var l int
	_ = l
	l = m.Params.Size()
	n += 1 + l + sovGenesis(uint64(l))
	if len(m.CommerceList) > 0 {
		for _, e := range m.CommerceList {
			l = e.Size()
			n += 1 + l + sovGenesis(uint64(l))
		}
	}
	if m.CommerceCount != 0 {
		n += 1 + sovGenesis(uint64(m.CommerceCount))
	}
	if len(m.GovernanceList) > 0 {
		for _, e := range m.GovernanceList {
			l = e.Size()
			n += 1 + l + sovGenesis(uint64(l))
		}
	}
	if m.GovernanceCount != 0 {
		n += 1 + sovGenesis(uint64(m.GovernanceCount))
	}
	if len(m.DomainList) > 0 {
		for _, e := range m.DomainList {
			l = e.Size()
			n += 1 + l + sovGenesis(uint64(l))
		}
	}
	if m.DomainCount != 0 {
		n += 1 + sovGenesis(uint64(m.DomainCount))
	}
	if len(m.ComplianceList) > 0 {
		for _, e := range m.ComplianceList {
			l = e.Size()
			n += 1 + l + sovGenesis(uint64(l))
		}
	}
	if m.ComplianceCount != 0 {
		n += 1 + sovGenesis(uint64(m.ComplianceCount))
	}
	if len(m.FactoryList) > 0 {
		for _, e := range m.FactoryList {
			l = e.Size()
			n += 1 + l + sovGenesis(uint64(l))
		}
	}
	if m.FactoryCount != 0 {
		n += 1 + sovGenesis(uint64(m.FactoryCount))
	}
	return n
}

func sovGenesis(x uint64) (n int) {
	return (math_bits.Len64(x|1) + 6) / 7
}
func sozGenesis(x uint64) (n int) {
	return sovGenesis(uint64((x << 1) ^ uint64((int64(x) >> 63))))
}
func (m *GenesisState) Unmarshal(dAtA []byte) error {
	l := len(dAtA)
	iNdEx := 0
	for iNdEx < l {
		preIndex := iNdEx
		var wire uint64
		for shift := uint(0); ; shift += 7 {
			if shift >= 64 {
				return ErrIntOverflowGenesis
			}
			if iNdEx >= l {
				return io.ErrUnexpectedEOF
			}
			b := dAtA[iNdEx]
			iNdEx++
			wire |= uint64(b&0x7F) << shift
			if b < 0x80 {
				break
			}
		}
		fieldNum := int32(wire >> 3)
		wireType := int(wire & 0x7)
		if wireType == 4 {
			return fmt.Errorf("proto: GenesisState: wiretype end group for non-group")
		}
		if fieldNum <= 0 {
			return fmt.Errorf("proto: GenesisState: illegal tag %d (wire type %d)", fieldNum, wire)
		}
		switch fieldNum {
		case 1:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field Params", wireType)
			}
			var msglen int
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowGenesis
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				msglen |= int(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
			if msglen < 0 {
				return ErrInvalidLengthGenesis
			}
			postIndex := iNdEx + msglen
			if postIndex < 0 {
				return ErrInvalidLengthGenesis
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			if err := m.Params.Unmarshal(dAtA[iNdEx:postIndex]); err != nil {
				return err
			}
			iNdEx = postIndex
		case 2:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field CommerceList", wireType)
			}
			var msglen int
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowGenesis
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				msglen |= int(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
			if msglen < 0 {
				return ErrInvalidLengthGenesis
			}
			postIndex := iNdEx + msglen
			if postIndex < 0 {
				return ErrInvalidLengthGenesis
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			m.CommerceList = append(m.CommerceList, Commerce{})
			if err := m.CommerceList[len(m.CommerceList)-1].Unmarshal(dAtA[iNdEx:postIndex]); err != nil {
				return err
			}
			iNdEx = postIndex
		case 3:
			if wireType != 0 {
				return fmt.Errorf("proto: wrong wireType = %d for field CommerceCount", wireType)
			}
			m.CommerceCount = 0
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowGenesis
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				m.CommerceCount |= uint64(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
		case 4:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field GovernanceList", wireType)
			}
			var msglen int
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowGenesis
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				msglen |= int(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
			if msglen < 0 {
				return ErrInvalidLengthGenesis
			}
			postIndex := iNdEx + msglen
			if postIndex < 0 {
				return ErrInvalidLengthGenesis
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			m.GovernanceList = append(m.GovernanceList, Governance{})
			if err := m.GovernanceList[len(m.GovernanceList)-1].Unmarshal(dAtA[iNdEx:postIndex]); err != nil {
				return err
			}
			iNdEx = postIndex
		case 5:
			if wireType != 0 {
				return fmt.Errorf("proto: wrong wireType = %d for field GovernanceCount", wireType)
			}
			m.GovernanceCount = 0
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowGenesis
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				m.GovernanceCount |= uint64(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
		case 6:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field DomainList", wireType)
			}
			var msglen int
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowGenesis
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				msglen |= int(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
			if msglen < 0 {
				return ErrInvalidLengthGenesis
			}
			postIndex := iNdEx + msglen
			if postIndex < 0 {
				return ErrInvalidLengthGenesis
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			m.DomainList = append(m.DomainList, Domain{})
			if err := m.DomainList[len(m.DomainList)-1].Unmarshal(dAtA[iNdEx:postIndex]); err != nil {
				return err
			}
			iNdEx = postIndex
		case 7:
			if wireType != 0 {
				return fmt.Errorf("proto: wrong wireType = %d for field DomainCount", wireType)
			}
			m.DomainCount = 0
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowGenesis
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				m.DomainCount |= uint64(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
		case 8:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field ComplianceList", wireType)
			}
			var msglen int
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowGenesis
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				msglen |= int(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
			if msglen < 0 {
				return ErrInvalidLengthGenesis
			}
			postIndex := iNdEx + msglen
			if postIndex < 0 {
				return ErrInvalidLengthGenesis
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			m.ComplianceList = append(m.ComplianceList, Compliance{})
			if err := m.ComplianceList[len(m.ComplianceList)-1].Unmarshal(dAtA[iNdEx:postIndex]); err != nil {
				return err
			}
			iNdEx = postIndex
		case 9:
			if wireType != 0 {
				return fmt.Errorf("proto: wrong wireType = %d for field ComplianceCount", wireType)
			}
			m.ComplianceCount = 0
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowGenesis
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				m.ComplianceCount |= uint64(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
		case 10:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field FactoryList", wireType)
			}
			var msglen int
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowGenesis
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				msglen |= int(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
			if msglen < 0 {
				return ErrInvalidLengthGenesis
			}
			postIndex := iNdEx + msglen
			if postIndex < 0 {
				return ErrInvalidLengthGenesis
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			m.FactoryList = append(m.FactoryList, Factory{})
			if err := m.FactoryList[len(m.FactoryList)-1].Unmarshal(dAtA[iNdEx:postIndex]); err != nil {
				return err
			}
			iNdEx = postIndex
		case 11:
			if wireType != 0 {
				return fmt.Errorf("proto: wrong wireType = %d for field FactoryCount", wireType)
			}
			m.FactoryCount = 0
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowGenesis
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				m.FactoryCount |= uint64(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
		default:
			iNdEx = preIndex
			skippy, err := skipGenesis(dAtA[iNdEx:])
			if err != nil {
				return err
			}
			if (skippy < 0) || (iNdEx+skippy) < 0 {
				return ErrInvalidLengthGenesis
			}
			if (iNdEx + skippy) > l {
				return io.ErrUnexpectedEOF
			}
			iNdEx += skippy
		}
	}

	if iNdEx > l {
		return io.ErrUnexpectedEOF
	}
	return nil
}
func skipGenesis(dAtA []byte) (n int, err error) {
	l := len(dAtA)
	iNdEx := 0
	depth := 0
	for iNdEx < l {
		var wire uint64
		for shift := uint(0); ; shift += 7 {
			if shift >= 64 {
				return 0, ErrIntOverflowGenesis
			}
			if iNdEx >= l {
				return 0, io.ErrUnexpectedEOF
			}
			b := dAtA[iNdEx]
			iNdEx++
			wire |= (uint64(b) & 0x7F) << shift
			if b < 0x80 {
				break
			}
		}
		wireType := int(wire & 0x7)
		switch wireType {
		case 0:
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return 0, ErrIntOverflowGenesis
				}
				if iNdEx >= l {
					return 0, io.ErrUnexpectedEOF
				}
				iNdEx++
				if dAtA[iNdEx-1] < 0x80 {
					break
				}
			}
		case 1:
			iNdEx += 8
		case 2:
			var length int
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return 0, ErrIntOverflowGenesis
				}
				if iNdEx >= l {
					return 0, io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				length |= (int(b) & 0x7F) << shift
				if b < 0x80 {
					break
				}
			}
			if length < 0 {
				return 0, ErrInvalidLengthGenesis
			}
			iNdEx += length
		case 3:
			depth++
		case 4:
			if depth == 0 {
				return 0, ErrUnexpectedEndOfGroupGenesis
			}
			depth--
		case 5:
			iNdEx += 4
		default:
			return 0, fmt.Errorf("proto: illegal wireType %d", wireType)
		}
		if iNdEx < 0 {
			return 0, ErrInvalidLengthGenesis
		}
		if depth == 0 {
			return iNdEx, nil
		}
	}
	return 0, io.ErrUnexpectedEOF
}

var (
	ErrInvalidLengthGenesis        = fmt.Errorf("proto: negative length found during unmarshaling")
	ErrIntOverflowGenesis          = fmt.Errorf("proto: integer overflow")
	ErrUnexpectedEndOfGroupGenesis = fmt.Errorf("proto: unexpected end of group")
)
